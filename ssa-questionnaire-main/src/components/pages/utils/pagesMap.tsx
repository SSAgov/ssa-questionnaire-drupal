import React from 'react';
import { Landing } from '../landing/Landing';
import { Intro } from '../intro/Intro';
import { Results, EligibilityResults, NoResults } from '../results';
import { Summary } from '../summary/Summary';
import { NotFound } from '@/components/common';
import { IPageMap } from '@/interfaces';
import { PausePoint } from '../pause-points/PausePoint';
import { FeedbackPrompt, FeedbackThanks } from '../feedback-prompts';

export const feedbackPromptIds = [
  'feedback_prompt_1',
  'feedback_prompt_2',
  'feedback_prompt_3',
];

export const feedbackPromptsMap = {
  feedback_prompt_1: <div data-test="feedback_prompt_1"><FeedbackPrompt /></div>,
  feedback_prompt_2: <div data-test="feedback_prompt_2"><FeedbackPrompt /></div>,
  feedback_prompt_3: <div data-test="feedback_prompt_3"><FeedbackPrompt /></div>,
  feedback_thanks: <div data-test="feedback_thanks"><FeedbackThanks /></div>,
};

export const pausePointsMap: IPageMap = {
  pause_issnrc: <div data-test="pause_issnrc-container"><PausePoint /></div>,
  pause_ossnap: <div data-test="pause_ossnap-container"><PausePoint /></div>,
  pause_FBU: <div data-test="pause_FBU-container"><PausePoint /></div>,
  pause_nonet: <div data-test="pause_nonet-container"><PausePoint /></div>,
  pause_notprpap: <div data-test="pause_notprpap-container"><PausePoint /></div>,
};

export const pagesMap: IPageMap = {
  ...pausePointsMap,
  ...feedbackPromptsMap,
  landing: <Landing />,
  intro: <Intro />,
  results: <Results />,
  summary: <Summary />,
  eligibility_results: <EligibilityResults />,
  no_results: <NoResults />,
  not_found: <NotFound />,
};
