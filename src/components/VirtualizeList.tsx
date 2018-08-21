import React, { Component } from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

function generateMock() {
  const mock = [] as string[];
  for (let index = 0; index < 1000; index++) {
    mock[index] = `Mock-${index}`;
  }

  return mock;
}

export class VirtualizeList extends Component<any> {
  private mocks = [] as string[];
  constructor(props) {
    super(props);

    this.mocks = generateMock();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     const { listData } = this.props;
  //     if (!shallowEqual(listData, nextProps.listData)) {
  //         return true;
  //     }

  //     return false;
  // }

  // componentDidUpdate() {
  //     this.myRef.current.forceUpdateGrid();
  // }

  public rowRenderer = ({ index, isScrolling, isVisible, key, style }) => {
    const row = this.mocks[index];
    console.log(index, style, this.mocks.length);
    return (
      <div key={key} style={style}>
        {row}
      </div>
    );
  }

  public render() {
    const { /*listData, listWidth, rowRenderer,*/ noRowsRenderer } = this.props;

    return (
      <WindowScroller
      // ref={this._setRef}
      // scrollElement={window}
      >
        {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => (
          <div style={{ flex: 1 }}>
            <AutoSizer disableHeight>
              {({ width }) => (
                <div ref={registerChild}>
                  <List
                    ref={(el) => {
                      (window as any).listEl = el;
                    }}
                    // ref={this.myRef}
                    // className={styles.List}
                    autoHeight
                    height={height}
                    // overscanRowCount={10}
                    noRowsRenderer={noRowsRenderer}
                    rowCount={this.mocks.length}
                    rowHeight={15} // 245
                    rowRenderer={this.rowRenderer.bind(this)}
                    // scrollToIndex={scrollToIndex}
                    width={width}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                  />
                </div>
              )}
            </AutoSizer>
          </div>
        )}
      </WindowScroller>
    );
  }
}
