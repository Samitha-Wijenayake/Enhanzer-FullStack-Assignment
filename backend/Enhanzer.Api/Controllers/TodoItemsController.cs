using Enhanzer.Api.Data;
using Enhanzer.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Enhanzer.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodoItemsController(AppDbContext context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoItem>>> GetAll()
    {
        return Ok(await context.TodoItems.OrderBy(item => item.Id).ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult<TodoItem>> Create([FromBody] TodoItem input)
    {
        if (string.IsNullOrWhiteSpace(input.Title))
        {
            return BadRequest("Title is required.");
        }

        var item = new TodoItem
        {
            Title = input.Title.Trim(),
            IsCompleted = input.IsCompleted
        };

        context.TodoItems.Add(item);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAll), new { id = item.Id }, item);
    }
}
