import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface TodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/TodoItems';

  protected readonly todos = signal<TodoItem[]>([]);
  protected titleInput = '';

  ngOnInit(): void {
    this.loadTodos();
  }

  protected addTodo(): void {
    const title = this.titleInput.trim();
    if (!title) {
      return;
    }

    this.http.post<TodoItem>(this.apiUrl, { title, isCompleted: false }).subscribe({
      next: () => {
        this.titleInput = '';
        this.loadTodos();
      }
    });
  }

  private loadTodos(): void {
    this.http.get<TodoItem[]>(this.apiUrl).subscribe({
      next: (items) => this.todos.set(items)
    });
  }
}
