import Bus from '@/dd/Bus'
import { HBlock, BlockTypes } from '@/dd/types';

describe('Bus', () => {
  it('gets by id', () => {
    const snippets:HBlock = {
      type: BlockTypes.HFLOW,
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
