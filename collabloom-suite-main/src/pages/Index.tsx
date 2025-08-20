import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { KanbanColumn } from "@/components/kanban/KanbanColumn";
import { Task } from "@/components/tasks/TaskCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp,
  Calendar,
  AlertCircle
} from "lucide-react";

// Mock data for demonstration
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design homepage wireframe",
    description: "Create wireframes for the new homepage design including mobile responsive layouts",
    status: "todo",
    priority: "high",
    assignee: { name: "Alice Johnson" },
    dueDate: "2024-01-15",
    comments: 3,
    tags: ["design", "wireframe"]
  },
  {
    id: "2",
    title: "Implement user authentication",
    description: "Set up login/signup functionality with email verification",
    status: "in-progress",
    priority: "high",
    assignee: { name: "Bob Smith" },
    dueDate: "2024-01-18",
    comments: 1,
    tags: ["backend", "auth"]
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Document all REST API endpoints with examples and response formats",
    status: "review",
    priority: "medium",
    assignee: { name: "Carol Davis" },
    dueDate: "2024-01-20",
    comments: 2,
    tags: ["documentation", "api"]
  },
  {
    id: "4",
    title: "Set up CI/CD pipeline",
    description: "Configure automated testing and deployment pipeline",
    status: "done",
    priority: "medium",
    assignee: { name: "David Wilson" },
    dueDate: "2024-01-12",
    comments: 0,
    tags: ["devops", "automation"]
  }
];

const Index = () => {
  const tasksByStatus = {
    todo: mockTasks.filter(task => task.status === 'todo'),
    'in-progress': mockTasks.filter(task => task.status === 'in-progress'),
    review: mockTasks.filter(task => task.status === 'review'),
    done: mockTasks.filter(task => task.status === 'done')
  };

  const handleTaskClick = (task: Task) => {
    console.log('Task clicked:', task);
    // TODO: Open task details modal
  };

  const handleAddTask = (status: string) => {
    console.log('Add task for status:', status);
    // TODO: Open create task modal
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Tasks"
            value={mockTasks.length}
            icon={CheckCircle}
            description="Active project tasks"
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="In Progress"
            value={tasksByStatus['in-progress'].length}
            icon={Clock}
            description="Currently active"
          />
          <StatsCard
            title="Team Members"
            value={4}
            icon={Users}
            description="Active contributors"
          />
          <StatsCard
            title="Projects"
            value={3}
            icon={TrendingUp}
            description="Active projects"
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">David Wilson</span>
                <span>completed</span>
                <span className="font-medium">Set up CI/CD pipeline</span>
                <span className="text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">Bob Smith</span>
                <span>started working on</span>
                <span className="font-medium">Implement user authentication</span>
                <span className="text-muted-foreground">4 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">Carol Davis</span>
                <span>submitted for review</span>
                <span className="font-medium">Write API documentation</span>
                <span className="text-muted-foreground">1 day ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Kanban Board Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Task Board</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              <KanbanColumn
                title="To Do"
                tasks={tasksByStatus.todo}
                status="todo"
                onTaskClick={handleTaskClick}
                onAddTask={handleAddTask}
              />
              <KanbanColumn
                title="In Progress"
                tasks={tasksByStatus['in-progress']}
                status="in-progress"
                onTaskClick={handleTaskClick}
                onAddTask={handleAddTask}
              />
              <KanbanColumn
                title="Review"
                tasks={tasksByStatus.review}
                status="review"
                onTaskClick={handleTaskClick}
                onAddTask={handleAddTask}
              />
              <KanbanColumn
                title="Done"
                tasks={tasksByStatus.done}
                status="done"
                onTaskClick={handleTaskClick}
                onAddTask={handleAddTask}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
