export interface LoginDto{
    email: string,
    password: string
}

export interface SignUp{
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface Post {
        _id: string;
        title: string;
        author: {
          _id: string;
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          profilePicture: string;
          likes: string[];
          saved: string[];
          role: string;
          createdAt: string;
          updatedAt: string;
          __v: number;
        };
        content: string;
        media: string;
        publish: boolean;
        categories: string[];
        likes: string[];
        menCategories: string[];
        womenCategories: string[];
        excerpt: string;
        format: string;
        tags: string[];
        featuredImage: string;
        nationality: string;
        highlight: string;
        photoSplash: boolean;
        slug: string;
        fantasy: boolean;
        editorsPick: boolean;
        newsBreaking: boolean;
        reads: number;
        featured: boolean;
        article: boolean;
        inFocus: boolean;
        createdAt: string;
        updatedAt: string;
        mediaType: string;
        thumbNail: string;
        __v: number;
};