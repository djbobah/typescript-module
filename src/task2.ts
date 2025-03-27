//TODO Напишите и типизируйте функцию, нормализующую входящие данные

import { PostType } from "./task2Data";

type normalizedDataType = {
  byId: { [key: string]: PostType };
  allIds: string[];
};

export const normalizeData = (
  unnormalizedData: PostType[]
): normalizedDataType => {
  const normalizedData: normalizedDataType = { byId: {}, allIds: [] };
  unnormalizedData.map((item) => {
    normalizedData.byId[item.id] = item;
    normalizedData.allIds.push(item.id);
  });

  return normalizedData;
};

/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
