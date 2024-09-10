interface Props {
  url: string
  title: string
  id: string
  date: Date
}

export interface Video extends Props {}
export class Video {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const VIDEOS: Video[] = [
  {
    url: 'https://www.youtube.com/embed/j0v1Cr74kN8?si=tp_blkpKqN4FP9te',
    id: 'j0v1Cr74kN8',
    title: 'What is Interaction-centric AI?',
    date: new Date('2022-10-28'),
  },
  {
    url: 'https://www.youtube.com/embed/pkhTuiYvvw4?si=hUee7IqJ-m95L1k2',
    id: 'pkhTuiYvvw4',
    title: 'KIXLAB Introduction',
    date: new Date('2021-02-12'),
  },
  {
    url: 'https://www.youtube.com/embed/GgvkmXXPFPI?si=YWMLcLMhac5kRYzJ',
    id: 'GgvkmXXPFPI',
    title: 'Open KAIST',
    date: new Date('2022-01-10'),
  },
] as const satisfies Video[]