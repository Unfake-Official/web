import Skeleton from '../ui/skeleton'

export default function AudioCardSkeleton() {
  return (
    <div className="border border-neutral-500 rounded-lg">
      <div className="flex flex-col">
        <div className="border-b border-neutral-500">
          <Skeleton className="rounded-md h-16 w-full bg-neutral-300 dark:bg-neutral-600" />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-2 p-4">
          {Array(6)
            .fill(1)
            .map((_, index) => (
              <Skeleton
                className="rounded-md h-6 w-32 bg-neutral-300 dark:bg-neutral-600"
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
