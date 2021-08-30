export interface IBlogSectionHeader {
    title: string;
    text: string;
    tags: ITag[]
}

export interface IPost {
    id: number;
    title: string;
    text?: string;
    tags?: [{ id: number; name: string }];
    media?: {
        id: number;
        url: string;
    }
    excerpt: string;
    created_at: string;
}


export interface ITag {
    id: number;
    name: string;
}

export interface IPostArray {
    [key: string]: IPost[]
}

export interface ITagArray {
    [key: string]: ITag[]
}

export interface IBlogProps {
    posts: IPost[],
    tags: ITag[]
}

export interface ICount {
    count: number;
}