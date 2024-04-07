/// <reference types="vite/client" />

declare namespace KintoneTypes {
  interface Base {
    $id?: kintone.fieldTypes.Id;
    $revision?: kintone.fieldTypes.Revision;
    更新人?: kintone.fieldTypes.Modifier;
    建立人?: kintone.fieldTypes.Creator;
    更新時間?: kintone.fieldTypes.UpdatedTime;
    建立時間?: kintone.fieldTypes.CreatedTime;
    key?: kintone.fieldTypes.RecordNumber;
    [key: string]: any;
  }
}

declare namespace KintoneEvent {
  interface Base {
    appId: number;
    type: string;
  }

  interface IndexShow<T> extends KintoneEvent.Base{
    records: T[]
    offest: number;
    size: number
    viewId: number;
    viewName: string;
    viewType: string;
  }

  interface Edit<T> extends KintoneEvent.Base {
    record: T;
  }
}
