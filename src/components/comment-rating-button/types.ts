export type CommentRatingButton = {
  value: number;
  title: string;
  onCommentRatingButtonChange: (value: number) => void;
  checked: boolean;
  disabled: boolean;
};
