kintone.events.on('app.record.index.show', (event: KintoneEvent.IndexShow<KintoneTypes.Base>) => {
  console.log('Hello Kintone')
  return event
})
