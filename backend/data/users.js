// Simple in-memory user store for demo/dev purposes.
// Replace with a real database (MongoDB/Postgres) in production.
export const users = []

export const findUserByIdentifier = (identifier) =>
  users.find((u) => u.email === identifier || u.phone === identifier)

export const findUserByEmailOrPhone = (email, phone) =>
  users.find((u) => u.email === email || u.phone === phone)
