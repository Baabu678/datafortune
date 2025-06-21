using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScreenController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ScreenController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<ScreenDefinition>> GetScreens()
        {
            return await _context.Screens.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<ScreenDefinition>> CreateScreen([FromBody] ScreenDefinition screen)
        {
            _context.Screens.Add(screen);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetScreens), new { id = screen.Id }, screen);
        }
    }
}
