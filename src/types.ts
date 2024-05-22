interface UserP {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<UserP, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
interface Config {
  endpoint: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = "newkey"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
// config.endpoint = "newendpoint"; // Error: Cannot assign to 'endpoint' because it is a read-only property.

const fqMap = new Map<string, number>();

const randomarr = ["hello", "hi", "hello", "bye", "hi", "hello"];

randomarr.forEach((el) => {
  fqMap.set(el, (fqMap.get(el) || 0) + 1);
});

const a = fqMap.get("hello") as number;
