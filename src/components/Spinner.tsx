import React, { useState } from 'react';
// import { Spin, Alert } from 'antd';
import SearchMap from "./Map";

export const Spinner: React.FC = () => {
    const [showMap, setShowMap ] = useState(false);



    return (
        <React.Fragment>
        <div className="spinner">
            {/* <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>  */}
        </div>
        <SearchMap />
        </React.Fragment>
    )
}
