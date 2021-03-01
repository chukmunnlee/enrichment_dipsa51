export const FRUITS = [
  "acorn_squash", "apple", "bell_pepper", "blueberries", "broccoli", "carrot",
  "celery", "chili_pepper", "corn", "eggplant", "lettuce", "mushroom", "onion",
  "potato", "pumpkin", "radish", "squash", "strawberry", "sugar_snap", "tomato",
  "zucchini"
]

export interface Item {
  name: string
  quantity: number
}

export interface Order {
  name: string
  email: string
  items: Item[]
}
