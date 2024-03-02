import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { reverseBetween } from './reverse-linked-list-II';

const test1_list = new ListNode(5);
const test2_list = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5),
      ),
    ),
  ),
);
const test3_list = new ListNode(10,
  new ListNode(20,
    new ListNode(30,
      new ListNode(40,
        new ListNode(50,
          new ListNode(60,
            new ListNode(70,
              new ListNode(80,
                new ListNode(90,
                  new ListNode(100),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
);
const test4_list = new ListNode(1,
  new ListNode(20,
    new ListNode(300,
      new ListNode(4_000,
        new ListNode(50_000,
          new ListNode(600_000,
            new ListNode(7_000_000,
              new ListNode(80_000_000,
                new ListNode(900_000_000,
                  new ListNode(1_000_000_000),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
);

describe('reverse linked list II', () => {
  test('short list', () => {
    const test1 = getArrayFromList(reverseBetween(test1_list, 1, 1));

    expect(test1).toEqual([5]);
  });

  test('middle list', () => {
    const test2 = getArrayFromList(reverseBetween(test2_list, 2, 4));

    expect(test2).toEqual([1,4,3,2,5]);
  });

  test('long list 1', () => {
    const test3 = getArrayFromList(reverseBetween(test3_list, 5, 9));

    expect(test3).toEqual([10,20,30,40,90,80,70,60,50,100]);
  });

  test('long list 2', () => {
    const test4 = getArrayFromList(reverseBetween(test4_list, 1, 10));

    expect(test4).toEqual([1_000_000_000, 900_000_000, 80_000_000, 7_000_000, 600_000, 50_000, 4_000, 300, 20, 1]);
  });
});

