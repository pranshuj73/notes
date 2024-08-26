---
title: Binary Search
---
Binary Search works by repeatedly dividing the array in half. On each iteration we check if the middle element in the array is 

Can be used `iteratively` or `recursively`.

```java
// iterative
int binarySearch(int arr[], int x) {
	int low = 0, high = arr.length - 1;

	while (low <= high) {
		int mid = low + (high - low) / 2;

		if (arr[mid] == x)
			return mid;

		if (arr[mid] < x)
			low = mid + 1;

		else
			high = mid - 1;
	}

	return -1;
}
```

```java
// recursive
int binarySearch(int arr[], int low, int high, int target)  {
	if (high >= low) {
		mid = low + (high - low) / 2;
		if (arr[mid] == target)
			return mid;

		if (arr[mid] > target)
			return binarySearch(arr, low, (mid - 1), target);

		return binarySearch(arr, (mid + 1), high, target);
	}

	return -1;
}
```


> [!TIP] Important
> Doing `mid = (low + high) / 2` can result in an integer overflow if `low` and `high` are large integers.
> 
> Instead do `mid = low + (high - low) / 2` which subtracts the `high` and `low` values preventing a possible overflow from taking place.
