/**
 * A project card component to be used in the projects page.
 *
 * It styles a container with a subtle background color, a border, rounded corners, padding, and some hover effects.
 *
 * It expects children to be passed in as a prop.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the card.
 */
export default function ProjectCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        bg-slate-900/60
        border border-slate-800
        rounded-xl p-8 space-y-6
        transition-all duration-300 ease-out
        hover:border-slate-700
        hover:-translate-y-0.5
        hover:shadow-lg hover:shadow-black/20
      "
    >
      {children}
    </div>
  );
}
