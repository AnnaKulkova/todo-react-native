export type Action<PayloadType = any> = {
  type: string;
  payload: {
    [arg: string]: PayloadType;
  };
};

export type TodoState = {
  id: string;
  text: string;
  originalColor: string;
  completed: boolean;
}[];
