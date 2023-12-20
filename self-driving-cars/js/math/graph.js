class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }
    addPoint(point) {
        this.points.push(point);
    }
    addSegment(segment) {
        this.segments.push(segment);
    }
    tryAddSegment(seg) {
        if (!this.containsSegment(seg) && !seg.point1.equals(seg.point2)) {
            this.addSegment(seg);
            return true;
        }
        return false;
    }
    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }
    removeSegment(seg) {
        return this.segments.splice(this.segments.indexOf(seg), 1);
    }
    getSegmentsWithPoints(point) {
        const segs = [];
        for (const seg of this.segments) {
            if (seg.includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }
    removePoint(point) {
        const segs =  this.getSegmentsWithPoints(point)
        for (const seg of segs) {
            this.removeSegment(seg);
        } 
        return this.points.splice(this.points.indexOf(point), 1);
    }
    containsPoint(point) {
        return this.points.find((p) => p.equals(point));
    }
    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }
    dispose() {
        this.points.length = 0;
        this.segments.length = 0;
    }
    draw(ctx) {

        for(const seg of this.segments) {
            seg.draw(ctx)
        }

        for(const point of this.points) {
            point.draw(ctx);
        }
    }
}