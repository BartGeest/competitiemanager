package novi.uni.compserver.payload.responses;

import java.util.List;

public class PagedResponse<T> {
    public List<T> content;
    private int page;
    private int size;
    private long allElements;
    private int allPages;
    private boolean isLastPage;

    public PagedResponse() {}

    public PagedResponse(List<T> content, int page, int size, long allElements, int allPages, boolean isLastPage) {
        this.content = content;
        this.page = page;
        this.size = size;
        this.allElements = allElements;
        this.allPages = allPages;
        this.isLastPage = isLastPage;
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public long getAllElements() {
        return allElements;
    }

    public void setAllElements(long allElements) {
        this.allElements = allElements;
    }

    public int getAllPages() {
        return allPages;
    }

    public void setAllPages(int allPages) {
        this.allPages = allPages;
    }

    public boolean isLastPage() {
        return isLastPage;
    }

    public void setLastPage(boolean lastPage) {
        isLastPage = lastPage;
    }
}
