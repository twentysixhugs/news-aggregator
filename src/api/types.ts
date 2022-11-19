export type MakeRequestInput = {
  endpoint?: string;
  method?: string;
  mode?: RequestMode;
  params?: { [param: string]: string | number | null | undefined };
  data?: BodyInit | null | undefined;
  headers?: HeadersInit;
};
