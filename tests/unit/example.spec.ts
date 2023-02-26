import Bus from '@/dd/Bus'
import { HBlock } from '@/dd/types';

describe('Bus', () => {
  it('gets by id', () => {
    const snippets:HBlock = {
      type: "h",
      id:"0",
      children:[]
    }
    const bus = new Bus({
      blocks:[],
      snippets
    });
    expect(bus.getById("0")).toEqual(snippets)
  })
})
