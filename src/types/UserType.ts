export const SubscriptionStatus = {
  NONE: 'NONE',
  ACTIVE: 'ACTIVE',
  DO_NOT_RENEW: 'DO_NOT_RENEW',
  PAUSED: 'PAUSED',
  WAITLIST: 'WAITLIST',
  CANCELLED: 'CANCELLED',
};

export type SubscriptionStatusType = $Values<typeof SubscriptionStatus>;

export type UserType = {
  uuid: string;
  firstname: string;
  lastname: string;
  displayName: string;
  email: string;
  isSubscribed?: boolean;
  isWaitlisted?: boolean;
  shouldShowPaymentFailure?: boolean;
  isFreeBagReferrer: boolean;
  numInvitesLeft: number;
  subscriptionStatus: SubscriptionStatusType;
  balance?: number;
  whitelisted?: boolean;
  gbPlusSubscriber?: boolean;
  token?: string;
  referId?: string;
};
