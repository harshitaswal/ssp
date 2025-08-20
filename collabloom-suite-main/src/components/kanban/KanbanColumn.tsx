import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TaskCard, Task } from "@/components/tasks/TaskCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  status: string;
  onTaskClick?: (task: Task) => void;
  onAddTask?: (status: string) => void;
}

export function KanbanColumn({ title, tasks, status, onTaskClick, onAddTask }: KanbanColumnProps) {
  return (
    <div className="flex flex-col w-80 bg-muted/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-sm">{title}</h3>
          <Badge variant="secondary" className="text-xs">
            {tasks.length}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAddTask?.(status)}
          className="h-8 w-8 p-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 space-y-3 min-h-[200px]">
        {tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </div>
  );
}