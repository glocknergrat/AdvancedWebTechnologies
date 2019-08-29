using System.ComponentModel.DataAnnotations;
namespace SkillsApi
{
    public class Skill
    {
        public int id { get; set; }

        public string name { get; set; }
    }

    public class Lesson{
         public int id { get; set; }
        public int topic { get; set; }
    }
}