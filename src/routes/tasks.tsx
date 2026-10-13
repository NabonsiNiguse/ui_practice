import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/tasks")({
  component: TasksPage,
})

function TasksPage() {
  return (
    <div>
      <h1>My Tasks</h1>
      <p>This is where our student tasks will appear.</p>
    </div>
  )
}