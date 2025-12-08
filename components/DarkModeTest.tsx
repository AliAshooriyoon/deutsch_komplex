'use client';

export function DarkModeTest() {
  return (
    <div className="p-8 space-y-4">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-2">Dark Mode Test</h2>
        <p>This box should have a white background in light mode and dark gray in dark mode.</p>
      </div>

      <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-4 rounded-lg">
        <p>This is a blue box that changes in dark mode.</p>
      </div>

      <div className="bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 p-4 rounded-lg">
        <p>This is a red box that changes in dark mode.</p>
      </div>
    </div>
  );
}
