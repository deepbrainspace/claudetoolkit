import { useState } from "react";
import { AgentType } from "@/types";

const DemoSection = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>("sales");

  const agents: AgentType[] = [
    {
      id: 1,
      name: "Sales Agent",
      type: "sales",
      description: "Handles product inquiries and sales processes",
    },
    {
      id: 2,
      name: "Support Agent",
      type: "support",
      description: "Provides customer support and technical assistance",
    },
    {
      id: 3,
      name: "Booking Agent",
      type: "booking",
      description: "Manages appointments and reservations",
    },
  ];

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience Our AI Voice Agents
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Agent Type
            </label>
            <select
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {agents.map((agent) => (
                <option key={agent.id} value={agent.type}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <p className="text-gray-600">
                {agents.find((a) => a.type === selectedAgent)?.description}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
                onClick={() => console.log("Start conversation")}
              >
                Start Conversation
              </button>
              <p className="text-sm text-gray-500">
                Click to start speaking with our AI agent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
