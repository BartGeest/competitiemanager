-- DATABASE CREATION

create database "novi-comp-mng"
    with owner postgres;

\c "novi-comp-mng";

-- SCHEMA CREATION
-- create schema public;

-- VOOR DE ZEKERHEID GRANT ALL
-- grant all on schema public to postgres;
-- grant all on schema public to public

-- TABLE COMPETITIE
create table competition
(
    id                          bigint generated by default as identity
        primary key,
    finished_at                 timestamp,
    name                        varchar(255),
    sportname                   varchar(255),
    starts_at                   timestamp,
    is_closed_for_participation boolean
);

alter table competition
    owner to postgres;

-- TABLE NOVI_EMPLOYEE
create table novi_employee
(
    id       bigint generated by default as identity
        primary key,
    password varchar(100),
    points   bigint,
    username varchar(36)
);

alter table novi_employee
    owner to postgres;

-- TABLE ROLES
create table roles
(
    id       bigint generated by default as identity
        primary key,
    rolename varchar(255)
        constraint uk_nb4h0p6txrmfc0xbrd1kglp9t
            unique
);

alter table roles
    owner to postgres;

-- TABLE EMPLOYEE_ROLES
create table employee_roles
(
    fk_employee bigint not null
        constraint fk4k7xkfcybi5gn144cqfedbmqu
            references novi_employee,
    fk_role     bigint not null
        constraint fkmxko3cfu0pxwa3u4sigs93dtb
            references roles,
    primary key (fk_employee, fk_role)
);

alter table employee_roles
    owner to postgres;

-- TABLE TEAM
create table team
(
    id              bigint generated by default as identity
        primary key,
    cost            bigint,
    lost_matches    bigint,
    name            varchar(36),
    sport_name      varchar(255),
    tie_matches     bigint,
    won_matches     bigint,
    owner           bigint
        constraint fkblkx4rwsoryehucsenhl9ca1b
            references novi_employee,
    fk_competition  bigint
        constraint fkibbtrfwg98m3b18dijvnic5cw
            references competition,
    can_participate boolean
);

alter table team
    owner to postgres;

-- TABLE MATCH
create table match
(
    id             bigint generated by default as identity
        primary key,
    start_time     timestamp,
    away           bigint
        constraint fke11aqye2mc12lg64v46br1iy7
            references team,
    fk_competition bigint
        constraint fk851gnx54eodqkoheomdmfdf0q
            references competition,
    home           bigint
        constraint fk9hlqskd5usnf4x3xtdhamtbxq
            references team
);

alter table match
    owner to postgres;

-- TABLE MATCH_RESULT
create table match_result
(
    id          bigint generated by default as identity
        primary key,
    away_points bigint,
    home_points bigint
);

alter table match_result
    owner to postgres;

-- TABLE FORECAST
create table forecast
(
    id                   bigint generated by default as identity
        primary key,
    came_true            boolean,
    forecast_away_points bigint,
    forecast_home_points bigint,
    forecast_type        varchar(255)
        constraint uk_n9s15erl1m56l28luxj1heyvg
            unique,
    fk_forecaster        bigint
        constraint fklstaew8p39623es5p8woqevj0
            references novi_employee,
    fk_match             bigint
        constraint fkas0qrqwsb9xd0di1u05rkaprm
            references match
);

alter table forecast
    owner to postgres;

INSERT INTO roles(rolename) VALUES('ROLE_EMPLOYEE');
INSERT INTO roles(rolename) VALUES('ROLE_ADMIN');

INSERT INTO competition(name, sportname, is_closed_for_participation)
VALUES
    ('voetbal-divisie-1'     , 'FOOTBALL'    , false),
    ('voetbal-divisie-2'     , 'FOOTBALL'    , false),
    ('voetbal-divisie-3'     , 'FOOTBALL'    , false),
    ('rugby-divisie-1'       , 'RUGBY'       , false),
    ('rugby-divisie-2'       , 'RUGBY'       , false),
    ('rugby-divisie-3'       , 'RUGBY'       , false),
    ('basketbal-divisie-1'   , 'BASKETBALL'  , false),
    ('basketbal-divisie-2'   , 'BASKETBALL'  , false),
    ('basketbal-divisie-3'   , 'BASKETBALL'  , false),
    ('honkbal-divisie-1'     , 'BASEBALL'    , false),
    ('honkbal-divisie-2'     , 'BASEBALL'    , false),
    ('honkbal-divisie-3'     , 'BASEBALL'    , false),
    ('volleybal-divisie-1'   , 'VOLLEYBALL'  , false),
    ('volleybal-divisie-2'   , 'VOLLEYBALL'  , false),
    ('volleybal-divisie-3'   , 'VOLLEYBALL'  , false);
