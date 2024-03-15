const heapify = (arr: number[], n: number, i: number) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    const tmp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = tmp;

    heapify(arr, n, largest);
  }
};

export const sortArray = (nums: number[]): number[] => {
  const n = nums.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    const tmp = nums[0];
    nums[0] = nums[i];
    nums[i] = tmp;

    heapify(nums, i, 0);
  }

  return nums;
};
