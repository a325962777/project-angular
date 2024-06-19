namespace Search_Jobs_server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public FieldWork FieldWorkSearch { get; set; }
        public int numCVSent {  get; set; } = 0;    

        public User(int id, string userName, string password, FieldWork fieldWorkSearch)
        {
            Id = id;
            UserName = userName;
            Password = password;
            FieldWorkSearch = fieldWorkSearch;
            numCVSent = 0;
            
        }
    }
}
