using System;
using System.Threading.Tasks;

using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(SignalR_Chat.Startup))]

namespace SignalR_Chat
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {      
            app.MapSignalR("/signalr", new HubConfiguration());
        }

    }
}
