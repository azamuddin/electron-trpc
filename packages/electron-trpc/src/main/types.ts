import { Operation } from '@trpc/client';
import type { IpcMainInvokeEvent } from 'electron';

export interface CreateContextOptions {
  event: IpcMainInvokeEvent;
  operation: Operation;
}
