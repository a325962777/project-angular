using Microsoft.AspNetCore.Mvc;
using Search_Jobs_server.Models;

namespace Search_Jobs_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        public List<User> listUsers = new List<User>
        {
            new User (1, "yoav", "00000000", FieldWork.SOFTWARE_DEVELOPMENT)
        };
        [HttpGet]
        public ActionResult<User> GetUser([FromQuery] string userName, [FromQuery] string password)
        {
            // בדוק אם אחד מהפרמטרים הוא null
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password) || listUsers == null)
            {
                return null;
            }
            var user = listUsers.FirstOrDefault(user => user.UserName == userName && user.Password == password);
            return user;    
        }
        [HttpPut]
        public ActionResult UpdateNumCV([FromBody] User user)
        {
            var cuurentUser= listUsers.FirstOrDefault(u=> u.Id == user.Id);
            cuurentUser.numCVSent = user.numCVSent;
            Console.WriteLine("user.numCVSent: "+ user.numCVSent);
            return Ok(cuurentUser);

        }

    }
}
