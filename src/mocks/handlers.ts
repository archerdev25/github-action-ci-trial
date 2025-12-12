import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          name: "John Doe",
          username: "johndoe",
          email: "john.doe@example.com",
        },
      ],
      { status: 200 }
    );
  }),
];
