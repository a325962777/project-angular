namespace Search_Jobs_server.Models
{
    public enum FieldWork {ACCOUNTING, SOFTWARE_DEVELOPMENT,ARCHITECTURE,EXTERIOR_DESIGN,
        SECRETARIAT,GRAPHICS};
    public class Job
    {
        public FieldWork FieldWork { get; set; }
        public string NameWork { get; set; }
        public int ScopeHours { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool HybridWork { get; set; }

        public Job(FieldWork fieldWork, string nameWork, int scopeHours, string area, string requirements, bool hybridWork)
        {
            FieldWork = fieldWork;
            NameWork = nameWork;
            ScopeHours = scopeHours;
            Area = area;
            Requirements = requirements;
            HybridWork = hybridWork;
        }
    }

}
