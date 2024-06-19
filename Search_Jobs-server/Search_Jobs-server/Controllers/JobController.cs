using Microsoft.AspNetCore.Mvc;
using Search_Jobs_server.Models;

namespace Search_Jobs_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {

        public List<Job> listJobs = new List<Job>
        {
            new Job(FieldWork.ACCOUNTING, "OFFICE ACCOUTING", 120,"Beer Sheva", "A diligent, punctual and orderly worker", false),
            new Job(FieldWork.SOFTWARE_DEVELOPMENT, "A FULL STACK TEAM LEADER", 130, "Tel Aviv","*exprience at least 5 years- must. *knowlange at react, java ",true),
            new Job(FieldWork.SECRETARIAT, "SECRETARIAT", 90,"Modiin", "creative orderly worker", false),
            new Job(FieldWork.ARCHITECTURE, "OFFICER ARCHITECTURE", 100, "Jerusalem","creative orderly worker", false)
        };
       
        [HttpGet("GetJobs")]
        public  List<Job> Get()
        {
            return listJobs;
        }
      
    }
}
