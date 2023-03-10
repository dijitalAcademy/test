using System;
using Interfaces.Interfaces;

namespace Interfaces.Classes
{
  public class Airplane : IDrivable
  {
    public int Wingspan { get; set; }
    public int NumberOfPassengers { get; set; }
    public string Model { get; set; }

    public void Accelerate()
    {
      Console.WriteLine("THE airplane is accelerating");
    }

    public void Brake()
    {
      Console.WriteLine("Airplane Brake!");
    }

    public void Start()
    {
      Console.WriteLine("START the Airplane!");
    }

    public void Stop()
    {
      Console.WriteLine("Airplanes shouldn't just stop....");
    }

    bool TakeOff()
    {
      return true;
    }

  }
}
