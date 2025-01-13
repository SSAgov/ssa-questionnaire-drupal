import {
  IAccordion,
  IAccordionContent,
  IAccordionLogic,
  IStepsContentItem,
  IStepsContentItemContent,
  IStepsContentItemLogic,
} from '@/interfaces';

export function associateStepsLogicWithContent(
  logicItems: IStepsContentItemLogic[],
  contentItems: IStepsContentItemContent[],
): IStepsContentItem[] {
  const combinedLogicAndContent: IStepsContentItem[] = logicItems
    .map((logicItem) => {
      const newLogicItem = { ...logicItem };
      const id = logicItem.id;
      const foundContentItem = contentItems.find((item) => item.id === id);
      if (foundContentItem) {
        delete newLogicItem.id;
        delete foundContentItem.id;

        // Handle Questions
        if (newLogicItem.type === 'question') {
          return {
            id,
            ...newLogicItem,
            ...foundContentItem,
          } as IStepsContentItem;
        }

        // Handle Pause Points
        if (newLogicItem.type === 'page' && newLogicItem.pausePoint) {
          if (!foundContentItem.pausePoint)
            throw new Error(
              `Content item for pause point ${id} is missing required properties.`,
            );

          const newPausePoint = { ...newLogicItem.pausePoint };
          const combinedPausePoint = {
            ...newPausePoint,
            ...foundContentItem.pausePoint,
          };
          if (newPausePoint.cta) {
            const combinedCTA = {
              ...newPausePoint.cta,
              ...foundContentItem.pausePoint.cta,
            };
            delete newPausePoint.cta;
            delete foundContentItem.pausePoint.cta;

            combinedPausePoint.cta = combinedCTA;
          }

          delete newLogicItem.pausePoint;
          delete foundContentItem.pausePoint;

          return {
            id,
            ...newLogicItem,
            ...foundContentItem,
            pausePoint: combinedPausePoint,
          } as IStepsContentItem;
        }

        // Handle simple pages
        if (newLogicItem.type === 'page') {
          return {
            id,
            ...newLogicItem,
            ...foundContentItem,
          } as IStepsContentItem;
        }
      }
      return null;
    })
    .filter((x) => !!x) as IStepsContentItem[];

  return combinedLogicAndContent;
}

export function associateAccordionsLogicWithContent(
  logicItems: IAccordionLogic[],
  contentItems: IAccordionContent[],
): IAccordion[] {
  const combinedLogicAndContent: IAccordion[] = logicItems
    .map((logicItem) => {
      const newLogicItem = { ...logicItem };
      const id = logicItem.id;
      const foundContentItem = contentItems.find((item) => item.id === id);
      if (foundContentItem) {
        delete newLogicItem.id;
        delete foundContentItem.id;

        return {
          id,
          ...newLogicItem,
          ...foundContentItem,
        } as IAccordion;
      }
      return null;
    })
    .filter((x) => !!x) as IAccordion[];

  return combinedLogicAndContent;
}
