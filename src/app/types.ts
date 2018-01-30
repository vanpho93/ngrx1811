export interface Word {
    en: string;
    vn: string;
    _id: string;
    isMemorized: boolean;
}

export type FilterMode = 'SHOW_ALL' | 'SHOW_MEMORIZED' | 'SHOW_FORGET';
