const heapify = (arr: number[], len: number, i: number) => {
  let largest = i;
  const left = i * 2 + 1;
  const right = left + 1;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, len, largest);
  }
};

export const sortArray = (nums: number[]): number[] => {
  const length = nums.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(nums, length, i);
  }

  for (let i = length - 1; i >= 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];

    heapify(nums, i, 0);
  }

  return nums;
};
