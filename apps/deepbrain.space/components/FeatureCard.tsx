import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface FeatureCardProps {
  title: string;
  description: string;
  icon:
    | "/img/chat-icon.svg"
    | "/img/clock-icon.svg"
    | "/img/integration-icon.svg";
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const icons = {
    "/img/chat-icon.svg": ChatBubbleLeftRightIcon,
    "/img/clock-icon.svg": ClockIcon,
    "/img/integration-icon.svg": CodeBracketIcon,
  };

  const Icon = icons[icon];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
