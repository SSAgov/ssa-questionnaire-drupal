import { ICTABodyHTML, ICTABodyJSX } from '@/components/common';

export interface IPausePointsContent {
  id: string;
  pausePoint: {
    title: string;
    subTitle?: string;
    cta?: {
      title: string;
      body: ICTABodyHTML | ICTABodyJSX;
      btnTxt: string;
    };
  };
}

export const pausePointsContentEn: IPausePointsContent[] = [
  {
    id: 'pause_issnrc',
    pausePoint: {
      title: `Request your card online`,
      subTitle: `You will need to provide:`,
      cta: {
        title: 'Next step',
        body: {
          type: 'html',
          html: `
          <p class="ssa-p-body">
            The fastest way to receive your replacement card is to apply online. <span class="ssa-p-body-bold">Sign in or create an account</span> to submit a request.
          </p>`,
        },
        btnTxt: 'Apply online',
      },
    },
  },
  {
    id: 'pause_ossnap',
    pausePoint: {
      title: `Get started by applying online`,
      subTitle: `You'll need:`,
      cta: {
        title: 'Next steps',
        body: {
          type: 'html',
          html: `
          <ol>
            <li>Submit an online application.</li>
            <li>Visit a local office with your required documents.</li>
            <li>Receive the card in the mail. Most cards arrive 14 days after we approve your application.</li>
          <ol>`,
        },

        btnTxt: 'Start application',
      },
    },
  },
  {
    id: 'pause_nonet',
    pausePoint: {
      title: `Request a replacement at a local office`,
      subTitle: `You'll need:`,
      cta: {
        title: 'Next step',
        body: {
          type: 'html',
          html: `
          <p class="ssa-p-body">
            During your visit, we'll review your documents and help you submit an application.
          </p>
          <p class="ssa-p-body margin-top-16px">
            You will receive your card by mail. Most cards arrive 14 days after we approve your application.   
          </p>`,
        },
        btnTxt: 'Find a local office',
      },
    },
  },
  {
    id: 'pause_FBU',
    pausePoint: {
      title: `Contact a Federal Benefits Unit`,
      subTitle: `You may be asked to provide:`,
      cta: {
        title: 'Next step',
        body: {
          type: 'html',
          html: `
          <p class="ssa-p-body">
            Contact a Federal Benefits Unit if you live outside the U.S. to apply for a replacement card.
          </p>`,
        },
        btnTxt: 'Find a Federal Benefits Unit',
      },
    },
  },
  {
    id: 'pause_notprpap',
    pausePoint: {
      title: `You may not be elegible`,
    },
  },
];
