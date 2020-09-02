export interface Doctor {
  name?: string;
  org?: string;
  availibility?: {
    sat?: string,
    sun?: string,
    mon?: string,
    tue?: string,
    wed?: string,
    thu?: string,
    fri?: string
    };
  visitDurationInMin?: number;
}
