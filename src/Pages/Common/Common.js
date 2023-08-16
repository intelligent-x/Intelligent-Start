import { Card, List } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { findUrls, sort } from "../../utils";

const Common = ({ path }) => {
    
    // 网址数组
    const [urls, setUrls] = useState([]);
    useEffect(() => {
        setUrls(
            // a, b ['github','https://github.com', 'description']
            findUrls(path).sort( ( a, b ) => sort( a[0], b[0] ) )
        );
    }, [path]);

    return (
        <div
            id="scrollableDiv"
            style={{
                height: '100%',
                overflow: 'hidden auto'
            }}
        >
            <InfiniteScroll
                dataLength={ urls.length }
            >
                <List
                    className="list"
                    itemLayout="horizontal"
                    dataSource={urls}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 5,
                        xl: 6,
                        xxl: 3,
                    }}
                    style={{
                        overflowX: 'hidden'
                    }}
                    renderItem={ ( [ label, url, description ] ) => (
                        <List.Item>
                            <Card
                                hoverable
                                bodyStyle={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                                title={<a href={url}>{label}</a>}
                            >
                                {description}{url}
                            </Card>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    )
}

export default Common;