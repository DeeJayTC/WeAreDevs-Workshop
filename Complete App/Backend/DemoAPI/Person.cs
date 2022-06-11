using TCDev.APIGenerator.Attributes;
using TCDev.APIGenerator.Interfaces;

namespace DemoAPI
{

    [Api("/people")]
    public class Person : IObjectBase<Guid>
    {
        public Guid Id { get; set; }
        
        public string Name { get; set; }
        
        public string Email { get; set; }
        
        public string Image { get; set; }

        public string Department { get; set; }
    }
}
