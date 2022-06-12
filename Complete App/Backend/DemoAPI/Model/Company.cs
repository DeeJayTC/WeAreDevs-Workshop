

using TCDev.APIGenerator.Attributes;
using TCDev.APIGenerator.Data;
using TCDev.APIGenerator.Hooks;
using TCDev.APIGenerator.Interfaces;

namespace DemoAPI
{

    [Api("/companies", ApiMethodsToGenerate.All)]
    public class Company : IObjectBase<Guid>
    {
        public Guid Id { get; set; } = new Guid();

        public string Name { get; set; }
        
        public string Email { get; set; }
       
        public string Image { get; set; }

        public List<Person>? People { get; set; }

        public string Address { get; set; }
        public string Country { get; set; }

    }

}
