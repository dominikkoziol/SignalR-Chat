using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR_Chat
{
    public class CommonHub : Hub
    {
        public void Announce(string message)
        {
            Clients.All.Announce(message);
        }
    }
}